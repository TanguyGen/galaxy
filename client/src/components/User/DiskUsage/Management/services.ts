import { fetcher } from "@/schema";
import { rethrowSimple } from "@/utils/simple-error";

import { type CleanableItem, CleanableSummary, CleanupResult, PaginationOptions } from "./Cleanup/model";

const _fetchDiscardedDatasetsSummary = fetcher.path("/api/storage/datasets/discarded/summary").method("get").create();

export async function fetchDiscardedDatasetsSummary(): Promise<CleanableSummary> {
    try {
        const { data } = await _fetchDiscardedDatasetsSummary({});
        return new CleanableSummary(data);
    } catch (e) {
        rethrowSimple(e);
    }
}

const _fetchDiscardedDatasets = fetcher.path("/api/storage/datasets/discarded").method("get").create();

export async function fetchDiscardedDatasets(options?: PaginationOptions): Promise<CleanableItem[]> {
    try {
        options = options ?? new PaginationOptions();
        const { data } = await _fetchDiscardedDatasets({
            offset: options.offset,
            limit: options.limit,
            order: options.order,
        });
        return data;
    } catch (e) {
        rethrowSimple(e);
    }
}

const _cleanupDiscardedDatasets = fetcher.path("/api/storage/datasets").method("delete").create();

export async function cleanupDiscardedDatasets(items: CleanableItem[]): Promise<CleanupResult> {
    try {
        const item_ids = items.map((item) => item.id);
        const { data } = await _cleanupDiscardedDatasets({
            item_ids,
        });
        return new CleanupResult(data, items);
    } catch (error) {
        return new CleanupResult(undefined, items, error as string);
    }
}

const _fetchDiscardedHistoriesSummary = fetcher.path("/api/storage/histories/discarded/summary").method("get").create();

export async function fetchDiscardedHistoriesSummary(): Promise<CleanableSummary> {
    try {
        const { data } = await _fetchDiscardedHistoriesSummary({});
        return new CleanableSummary(data);
    } catch (e) {
        rethrowSimple(e);
    }
}

const _fetchDiscardedHistories = fetcher.path("/api/storage/histories/discarded").method("get").create();

export async function fetchDiscardedHistories(options?: PaginationOptions): Promise<CleanableItem[]> {
    try {
        options = options ?? new PaginationOptions();
        const { data } = await _fetchDiscardedHistories({
            offset: options.offset,
            limit: options.limit,
            order: options.order,
        });
        return data;
    } catch (e) {
        rethrowSimple(e);
    }
}

const _cleanupDiscardedHistories = fetcher.path("/api/storage/histories").method("delete").create();

export async function cleanupDiscardedHistories(items: CleanableItem[]) {
    try {
        const item_ids = items.map((item) => item.id);
        const { data } = await _cleanupDiscardedHistories({
            item_ids,
        });
        return new CleanupResult(data, items);
    } catch (error) {
        return new CleanupResult(undefined, items, error as string);
    }
}
