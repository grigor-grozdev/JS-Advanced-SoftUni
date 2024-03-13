function encodeAndDecodeMessages() {

    let encodeBtn = document.querySelectorAll('button')[0];
    let decodeBtn = document.querySelectorAll('button')[1];

    encodeBtn.addEventListener('click', onEncodeClick);

    let messageArea = document.querySelectorAll('textarea')[0];
    let receivedMsgArea = document.querySelectorAll('textarea')[1];

    function onEncodeClick(event) {

        let message = messageArea.value;
        let codedText = '';
        for (let ch of message) {
            codedText += String.fromCharCode(ch.charCodeAt() + 1);
        };
        receivedMsgArea.textContent = codedText;
        messageArea.value = '';

    };

    decodeBtn.addEventListener('click', onDecodeClick);

    function onDecodeClick(event) {
        let decodedText = '';
        for (let ch of receivedMsgArea.textContent) {
            decodedText += String.fromCharCode(ch.charCodeAt() - 1);
        };
        receivedMsgArea.textContent = decodedText;
    };

};