const camera = function () {
    let width = 0;
    let height = 0;
    let str = null

    const createObjects = function () {

        const videoWrapper = document.getElementById('videoWrapper')
        if(document.getElementById('video')) document.getElementById('video').remove()
        if(document.getElementById('canvas')) document.getElementById('canvas').remove()


        const video = document.createElement('video');
        video.id = 'video';
        video.width = width;
        video.width = height;
        video.autoplay = true;
        videoWrapper.appendChild(video);

        const canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = width;
        canvas.width = height;
        document.body.appendChild(canvas);
    }


    return {
        video: null,
        context: null,
        canvas: null,

        startCamera: function (w = 680, h = 480) {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                width = w;
                height = h;

                createObjects();

                this.video = document.getElementById('video');
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');

                (function (video) {
                    navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
                        video.srcObject = stream;
                        str = video.srcObject
                        video.play();
                    });
                })(this.video)
            }
        },



        removeCamera: function () {
            if(!str) return null
            if(document.getElementById('video')) document.getElementById('video').remove()
            if(document.getElementById('canvas')) document.getElementById('canvas').remove()
            const tracks = str.getTracks();
            tracks.forEach(function(track) {
                track.stop();
            });
            str = null
        },

        takeSnapshot: function (e) {
            this.context.drawImage(this.video, 0, 0, width, height)

        }
    }

}();

export default camera;
