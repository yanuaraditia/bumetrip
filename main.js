var navbarcat = new Vue({
    el: '#category',
    data: {
      items: [
        { 
            link: '#',
            name: 'Semua',
            status: true
        },
        { 
            link: '#',
            name: 'Budaya'
        },
        { 
            link: '#',
            name: 'Kuliner'
        },
        { 
            link: '#',
            name: 'Landmark'
        },
        { 
            link: '#',
            name: 'Religi'
        },
        { 
            link: '#',
            name: 'Wisata Alam'
        }
      ]
    }
});
var data = new Vue({
    el: "#trip-data",
    data: {
        items: [
            {
                link: '#',
                title: "Pasar Pereng Kali",
                lokasi: "Grenggeng, Karanganyar",
                cat: "Kuliner",
                gambar: "assets/sample4.jpg"
            },
            {
                link: '#',
                title: "Pantai Menganti",
                lokasi: "Karangduwur, Ayah",
                cat: "Alam",
                gambar: "assets/sample1.jpg"
            },
            {
                link: '#',
                title: "Tugu Lawet",
                lokasi: "Panjer, Kebumen",
                cat: "Landmark",
                gambar: "assets/sample2.jpg"
            },
            {
                link: '#',
                title: "Bukit Banda",
                lokasi: "Kalikemong, Sadang",
                cat: "Alam",
                gambar: "assets/sample3.jpg"
            },
            {
                link: '#',
                title: "Kampoeng Etnik",
                lokasi: "Pejagoan, Kebumen",
                cat: "Budaya",
                gambar: "assets/sample5.jpg"
            }
        ]
    }
});
var mainMenu = new Vue({
    el: '#main-nav',
    data: {
        items: [
            {
                link: 'index.html',
                title: 'Beranda',
                dhide: true
            },
            {
                link: 'index.html',
                title: 'Bantuan'
            },
            {
                link: 'index.html',
                title: 'Tambahkan Trip'
            },
            {
                link: 'index.html',
                title: 'Informasi',
                dropdown: true,
                dropdown_item: [
                    {
                        url: '#',
                        title: 'Dropdown 1'
                    },
                    {
                        url: '#',
                        title: 'Dropdown 2'
                    },
                    {
                        url: '#',
                        title: 'Dropdown 3'
                    }
                ]
            },
            {
                link: 'login.html',
                title: 'Login'
            }
        ]
    }
});