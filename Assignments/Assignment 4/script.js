$(() => {
    $('.submit').on('click', (e) => {
        e.preventDefault();
        let messageInput = $('#message');
        let messageText = messageInput.val();

        if(messageText.length > 0) {
            let message = $('<div></div>', {
                html: messageText,
                class: 'message rounded col-4 offset-4 mb-3'
            });

            let youtubeRegex = /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)/g;

            //Allows unlimited youtube links
            let match;
            while ((match = youtubeRegex.exec(messageText)) != null) {
                $('<iframe></iframe>', {
                    src: 'https://www.youtube.com/embed/' + match[6],
                    class: 'embed',
                }).appendTo(message);
            }

            message.prependTo('.messages');
            messageInput.val('');
        }
    });
});
