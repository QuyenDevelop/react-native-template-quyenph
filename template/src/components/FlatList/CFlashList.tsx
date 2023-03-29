import { useBoolean } from "@hooks";
import {
  FlashList,
  MasonryFlashList,
  MasonryFlashListProps,
} from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl } from "react-native";
import { CThemes } from "@shared";

export enum FlashListVariant {
  FLASH_LIST = "FLASH_LIST",
  MASONRY_LIST = "MASONRY_LIST",
}

export interface FlatListLoadRequest {
  numberOfResult: number;
  totalResult: number;
}

export interface Props<T> extends MasonryFlashListProps<T> {
  variant?: string;
  isLoading?: boolean;
  disableLoadMore?: boolean;
  disableRefresh?: boolean;
  defaultRequest: any;
  renderListItem: ({ item, index }: { item: T; index: number }) => JSX.Element;
  onLoadData: (
    pageIndex: number,
    startCallBack: () => void,
    endCallBack: () => void,
  ) => Promise<FlatListLoadRequest> | undefined;
  shouldRefreshWhenFocus?: boolean;
}

export type CFlashListProps<T = any> = React.FC<Props<T>>;

export const CFlashList: CFlashListProps = props => {
  const {
    data,
    renderListItem,
    variant = FlashListVariant.FLASH_LIST,
    isLoading,
    defaultRequest,
    disableLoadMore,
    onLoadData,
    disableRefresh,
    shouldRefreshWhenFocus,
    estimatedItemSize = CThemes.screenUtils.scale(200),
    ...args
  } = props;
  const [isRefreshing, showRefreshing, hideRefreshing] = useBoolean();
  const [isLoadingFooter, showLoadMore, hideLoadMore] = useBoolean();
  const [pageIndex, setPageIndex] = useState(1);

  const updatePageInfo = (
    updateRequest?: FlatListLoadRequest,
    isRefresh?: boolean,
  ) => {
    if (updateRequest) {
      setPageIndex(isRefresh ? 2 : pageIndex + 1);
      // setNumberOfItems(
      //   isRefresh
      //     ? flatListLoadMoreModel.numberResultItems
      //     : numberOfItems + flatListLoadMoreModel.numberResultItems,
      // );
    }
  };

  useEffect(() => {
    shouldRefreshWhenFocus && handleRefresh();
  }, [shouldRefreshWhenFocus]);

  const handleRefresh = () => {
    if (isLoading || isLoadingFooter || isRefreshing || disableRefresh) {
      return;
    }
    onLoadData(1, showRefreshing, hideRefreshing)
      ?.then((request: FlatListLoadRequest) => {
        updatePageInfo(request, true);
      })
      .finally(hideRefreshing);
  };

  const handleLoadMore = () => {
    if (isLoading || isLoadingFooter || isRefreshing || disableLoadMore) {
      return;
    }
    onLoadData(pageIndex, showLoadMore, hideLoadMore)
      ?.then((request: FlatListLoadRequest) => {
        updatePageInfo(request, false);
      })
      .finally(hideRefreshing);
  };

  const keyExtractor = (item: any, index: number) =>
    item?.id ? `${item?.id}_${index}` : index.toString();

  const renderListFooter = () => {
    return isLoadingFooter ? (
      <ActivityIndicator size={"small"} color={CThemes.colors.primary3s} />
    ) : null;
  };

  if (variant === FlashListVariant.MASONRY_LIST) {
    return (
      <MasonryFlashList
        data={data}
        keyExtractor={keyExtractor}
        estimatedItemSize={estimatedItemSize}
        keyboardShouldPersistTaps="handled"
        onEndReachedThreshold={0.6}
        onEndReached={handleLoadMore}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing || false}
            onRefresh={handleRefresh}
          />
        }
        ListFooterComponent={renderListFooter}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...args}
        renderItem={renderListItem}
      />
    );
  }

  return (
    <FlashList
      data={data}
      estimatedItemSize={estimatedItemSize}
      keyExtractor={keyExtractor}
      keyboardShouldPersistTaps="handled"
      onEndReachedThreshold={0.6}
      onEndReached={handleLoadMore}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing || false}
          onRefresh={handleRefresh}
        />
      }
      ListFooterComponent={renderListFooter}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...args}
      renderItem={renderListItem}
    />
  );
};
