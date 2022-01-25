function storeMiddleware() {
  return next => action => {
    if (action.type === 'DIRECT_LINE/INCOMING_ACTIVITY' && action.payload.activity.from.id === 'webchat-mockbot') {
      action.payload.activity.speak = null;
      action.payload.activity.text = null;
      action.payload.activity.attachments = [
        {
          contentType: 'application/vnd.microsoft.card.adaptive',
          content: getCard()
        }
      ];
    }
    return next(action);
  };
}
