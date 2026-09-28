/** Opens the chat widget from anywhere on the page. */
export const openChat = (message?: string) =>
  window.dispatchEvent(new CustomEvent("wu:chat-open", { detail: { message } }));
