import syncImage from './src/syncImg/sync';

const syncTheimg = new syncImage();

const syncImage = (url) => {
    return syncTheimg.getSyncedImage(url)
}

module.exports = syncImage;
