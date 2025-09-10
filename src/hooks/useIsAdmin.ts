// hooks/useIsAdmin.ts
import { useChatId } from "./useChatId";

export function useIsAdmin(): boolean {
    const chatId = useChatId();
    const chatIdSet = new Set<string>();
    chatIdSet.add("1085241246");
    chatIdSet.add("345906815");
    chatIdSet.add("802511752");
    return chatIdSet.has(chatId || "");
}