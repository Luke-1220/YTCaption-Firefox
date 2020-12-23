chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.method) {
        case 'getItem': // 指定されたkeyの値を取得
            console.log('getItem');
            sendResponse({data: localStorage[request.key]});
            break;
         default:
            console.log('no method');
            break;
    }
  });