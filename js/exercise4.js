//Поля
// Масив об'єктів (графічних зображень та посилань на сайти)
// Методи:
// Метод випадкового вибору об'єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

class BannerLinks {
    constructor(image, link) {
        this.image = image;
        this.link = link;
    }
}

let bannerLinks = [
    new BannerLinks('https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png', 'https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo'),
    new BannerLinks('https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png', 'www.google.com'),
    new BannerLinks('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png', 'https://www.apple.com/'),
    new BannerLinks('https://s3-symbol-logo.tradingview.com/newegg-commerce--600.png', 'https://www.newegg.com/'),
    new BannerLinks('https://xl-static.rozetka.com.ua/assets/img/main/rozetka.png', 'https://rozetka.com.ua/'),
    new BannerLinks('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1V0MNYCJrFdrokB5o8waTWIA0wuSU3ePnr3x48aSjTygUaGgV', 'https://www.logitech.com/'),
    new BannerLinks('https://pritula-strapi.s3.eu-central-1.amazonaws.com/share_default_4190e58e8c.png', 'https://prytulafoundation.org/'),
    new BannerLinks('https://www.sostav.ru/app/public/images/news/2017/08/30/compressed/Screenshot_6.png', 'https://www.youtube.com/'),
    new BannerLinks('https://3dnews.ru/assets/external/illustrations/2021/06/02/1041085/67657.jpg', 'https://stackoverflow.com/'),
    new BannerLinks('https://cdn-icons-png.flaticon.com/512/25/25231.png', 'https://github.com/')
];

class Banner {
    constructor(bannerList) {
        this.bannerList = bannerList;
    }

    getRandomIndex(){
        return Math.floor(Math.random() * this.bannerList.length)
    }
    getRandomBanner() {
        let random = this.getRandomIndex()
        return this.bannerList[random]
    }
    render() {
        let {image, link} = this.getRandomBanner()
        document.write(`<a href="${link}"><img style="max-width: 400px; max-height: 400px" src="${image}" alt="banner"></a>`)
    }
}

let banner = new Banner(bannerLinks);
banner.render()