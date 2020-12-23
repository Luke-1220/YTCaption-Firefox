window.addEventListener('DOMContentLoaded', function() {
    const properties = ["font-family","font-size","font-weight","color","background","text-shadow"];
    console.log("setcss");

    for (n in properties) {
        const property = properties[n];
        console.log(property);

        chrome.runtime.sendMessage({method: 'getItem', key: property}, function (response) {
            //console.log(response.data);
            if (response.data) {
                const ytd_app = document.getElementsByClassName("ytd-app").item(0)
                const value = response.data;
                console.log(value);
                var element = document.createElement('style');
                //element.type = 'text/css';
                element.innerHTML = ".ytp-caption-segment {"+property+": "+value+" !important;}";
                ytd_app.appendChild(element);
            }else{
                console.log(property+"error");
            }
          });
    };
});