const source = document.querySelector("#list").innerHTML;
const template = Handlebars.compile(source);
const context = {
    yoshiko: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Yume de Yozora wo Terashitai",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: " Only 1st/2nd years",
            img: "yynnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Cool-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "Guilty Kiss",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "Guilty Kiss members (Mari, Riko, Yoshiko)",
            img: "gkjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    hanamaru: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mskcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mwkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mmkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "mpkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "m7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "mjkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mmdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "msnnn.jpg"
        },
        {
            name: "Yume de Yozora wo Terashitai",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: " Only 1st/2nd years",
            img: "myynnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mohnnn.jpg"
        },
        {
            name: "Smile-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "msrnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mmwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mapnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mhptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mhsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mnsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mssssnnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mjjnn.jpg"
        },
        {
            name: "AZALEA",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "AZALEA members (Dia, Kanan, Hanamaru)",
            img: "mazjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mmhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "masjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mkkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mwmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "msmjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mpmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mbmjnn.jpg"
        },
        {
            name: "Sonic",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "Yes",
            img: "msomjnn.jpg"
        },
        {
            name: "Sakura Wars",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "Yes",
            img: "mswmjnn.jpg"
        },
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "mcll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "mbmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "mfdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "mtera.jpg"
        }
    ],
    riko: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Yume de Yozora wo Terashitai",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: " Only 1st/2nd years",
            img: "yynnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Cool-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "Jersey ver.2018",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "2nd years only",
            img: "j2jnn.jpg"
        },
        {
            name: "Guilty Kiss",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "Guilty Kiss members (Mari, Riko, Yoshiko)",
            img: "gkjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },
        {
            name: "Daisuki dattara Daijoubu!",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "2nd years only",
            img: "dddmjnn.jpg"
        },
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "7/11",
            year: "?",
            msize: "LL",
            size: "50cm",
            exclusive: "Yes",
            img: "711ll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    you: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Uchicchii",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "Yes",
            img: "uchnnn.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Yume de Yozora wo Terashitai",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: " Only 1st/2nd years",
            img: "yynnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Pure-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "Jersey ver.2018",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "2nd years only",
            img: "j2jnn.jpg"
        },
        {
            name: "CYaRon!",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "CYaRon! members (You, Chika, Ruby)",
            img: "cyrjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uchicchii",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "uchjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },
        {
            name: "Daisuki dattara Daijoubu!",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "2nd years only",
            img: "dddmjnn.jpg"
        },
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    chika: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Puchi Figure vol.2",
            year: "2017",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "spet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Yume de Yozora wo Terashitai",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: " Only 1st/2nd years",
            img: "yynnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Smile-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "Jersey ver.2018",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "2nd years only",
            img: "j2jnn.jpg"
        },
        {
            name: "CYaRon!",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "CYaRon! members (You, Chika, Ruby)",
            img: "cyrjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },
        {
            name: "Daisuki dattara Daijoubu!",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "2nd years only",
            img: "dddmjnn.jpg"
        },
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "Hyper-Fabulous Ultimate Jumbo Nesoberi EX",
            size: "10m",
            exclusive: "Yes.",
            img: "bigchika.jpg"
        }
    ],
    mari: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Smile-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Dia & Kanan & Mari - Aqours",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "Only 3rd years",
            img: "3nnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "Guilty Kiss",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "Guilty Kiss members (Mari, Riko, Yoshiko)",
            img: "gkjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },  
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    kanan: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Pure-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Dia & Kanan & Mari - Aqours",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "Only 3rd years",
            img: "3nnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "AZALEA",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "AZALEA members (Dia, Kanan, Hanamaru)",
            img: "azjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },  
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    dia: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Cool-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Dia & Kanan & Mari - Aqours",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "Only 3rd years",
            img: "3nnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "AZALEA",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "AZALEA members (Dia, Kanan, Hanamaru)",
            img: "azjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },  
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    ruby: [
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2018",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "ohpet.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2016",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Bokura no Hashittekita Michi wa…",
            year: "2019",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "mkcm.jpg"
        },
        {
            name: "Pajama",
            year: "2018",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "pkcm.jpg"
        },
        {
            name: "7/11",
            year: "2019",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "7kcm.jpg"
        },
        {
            name: "Jersey",
            year: "?",
            msize: "KCM",
            size: "13cm",
            exclusive: "No",
            img: "jkcm.jpg"
        },
        {
            name: "Mijuku DREAMER",
            year: "2017",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "mdnnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Yume de Yozora wo Terashitai",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: " Only 1st/2nd years",
            img: "yynnn.jpg"
        },
        {
            name: "Omoi yo Hitotsu ni Nare",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ohnnn.jpg"
        },
        {
            name: "Pure-Shoki SR-hen",
            year: "2017",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "srnnn.jpg"
        },
        {
            name: "MIRACLE WAVE",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mwnnn.jpg"
        },
        {
            name: "Awaken the power",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "apnnn.jpg"
        },
        {
            name: "Aozora Jumping Heart",
            year: "2018",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ahnnn.jpg"
        },
        {
            name: "HAPPY PARTY TRAIN",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hptnnn.jpg"
        },
        {
            name: "Hop? Stop? Nonstop!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "hsnnnn.jpg"
        },
        {
            name: "NEXT SPARKLING!!",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "nsnnn.jpg"
        },
        {
            name: "smile smile ship Start!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "ssssnnn.jpg"
        },
        {
            name: "Jersey",
            year: "2019",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "jjnn.jpg"
        },
        {
            name: "CYaRon!",
            year: "2018",
            msize: "JNN",
            size: "30cm",
            exclusive: "CYaRon! members (You, Chika, Ruby)",
            img: "cyrjnn.jpg"
        },
        {
            name: "Mitaiken HORIZON",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "mhjnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Kimi no Kokoro wa Kagayaiteru kai?",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "kkjnn.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "Uranohoshi Summer Uniform",
            year: "2017",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Practice Uniform",
            year: "2018",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "pmjnn.jpg"
        },
        {
            name: "Border Shirt",
            year: "2019",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "bmjnn.jpg"
        },
        {
            name: "Santa Girls",
            year: "2017",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "cll.jpg"
        },
        {
            name: "Brightest Melody",
            year: "2019",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "bmll.jpg"
        },
        {
            name: "Fantastic Departure!",
            year: "2021",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "fdll.jpg"
        },
        {
            name: "Uranohoshi Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    setsuna: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "CHASE!",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "chasejnn.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    shioriko: [
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Ketsui No Hikari",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "knhjnn.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    ai: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Meccha Going!",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "mecjnn.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    rina: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Doki Pipo ☆ Emotion",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "dokijnn.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    shizuku: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Anata no Risou no Heroine",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "anatajnn.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    mia: [
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2023",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "I'm Still...",
            year: "2022",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "stilljnn.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        }
    ],
    kanata: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Nemureru Mori ni Ikitai na",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "nemureru.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    lanzhu: [
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2023",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "Queendom",
            year: "2022",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "queendom.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        }
    ],
    kasumi: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Diamond",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "diamond.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],    
    ayumu: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Yume e no Ippo",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "yume.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    karin: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Starlight",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "starlight.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    emma: [
        {
            name: "Summer Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "skcm.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2022",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "wkcm.jpg"
        },
        {
            name: "Love U My Friends",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "lumf.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "snnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "Summer Practice",
            year: "2020",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "spnnn.jpg"
        },
        {
            name: "Nijiro Passions!",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "npnnn.jpg"
        },
        {
            name: "Winter Practice",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "wpnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Evergreen",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "evergreen.jpg"
        },
        {
            name: "Summer Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "smjnn.jpg"
        },
        {
            name: "Winter Uniform",
            year: "2023",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    kanon: [
        {
            name: "Starlight Prologue",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "starnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "unnn.jpg"
        },
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "Hajimari wa Kimi no Sora",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "hajisora.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        },
        {
            name: "START!! True Dreams",
            year: "2022",
            msize: "MJNN",
            size: "40cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "start.jpg"
        }
    ],
    keke: [
        {
            name: "Starlight Prologue",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "starnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "unnn.jpg"
        },
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "Hajimari wa Kimi no Sora",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "hajisora.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        },
        {
            name: "START!! True Dreams",
            year: "2022",
            msize: "MJNN",
            size: "40cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "start.jpg"
        }
    ],
    sumire: [
        {
            name: "Starlight Prologue",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "starnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "unnn.jpg"
        },
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "Hajimari wa Kimi no Sora",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "hajisora.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        },
        {
            name: "START!! True Dreams",
            year: "2022",
            msize: "MJNN",
            size: "40cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "start.jpg"
        }
    ],
    chisato: [
        {
            name: "Starlight Prologue",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "starnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "unnn.jpg"
        },
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "Hajimari wa Kimi no Sora",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "hajisora.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        },
        {
            name: "START!! True Dreams",
            year: "2022",
            msize: "MJNN",
            size: "40cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "start.jpg"
        }
    ],
    ren: [
        {
            name: "Starlight Prologue",
            year: "2022",
            msize: "NNN",
            size: "15cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "starnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "NNN",
            size: "16cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "unnn.jpg"
        },
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "Hajimari wa Kimi no Sora",
            year: "2021",
            msize: "JNN",
            size: "30cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "hajisora.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        },
        {
            name: "START!! True Dreams",
            year: "2022",
            msize: "MJNN",
            size: "40cm",
            exclusive: "1st gen. (Kanon, Keke, Chisato, Sumire, Ren)",
            img: "start.jpg"
        }
    ],
    kinako: [
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        }
    ],
    mei: [
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        }
    ],
    shiki: [
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        }
    ],
    natsumi: [
        {
            name: "School Uniform (2022 ver.)",
            year: "2022",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "u2nnn.jpg"
        },
        {
            name: "Sing! Shine! Smile!",
            year: "2023",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "sssnnn.jpg"
        },
        {
            name: "School Uniform",
            year: "2021",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "mjnn.jpg"
        }
    ],
    honoka: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform vol.2",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "Yes",
            img: "spet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet) vol.2",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "Yes",
            img: "wmspet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "School Festival Thanksgiving 2016 ver.",
            year: "2016",
            msize: "JNN",
            size: "30cm",
            exclusive: "Yes",
            img: "t6jnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    umi: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "Lawson",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "Yes",
            img: "lawsonmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    rin: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "Sonic",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "Yes",
            img: "sonic.jpg"
        },
        {
            name: "PuyoPuyo",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "Yes",
            img: "puyopuyo.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    kotori: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    maki: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    eli: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    nozomi: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    hanayo: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ],
    nico: [
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wpet.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform (Magnet)",
            year: "2015",
            msize: "Petit",
            size: "3cm",
            exclusive: "No",
            img: "wmpet.jpg"
        },
        {
            name: "Happy Maker",
            year: "2015",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "hmkcm.jpg"
        },
        {
            name: "Bokutachi wa Hitotsu no Hikari",
            year: "2016",
            msize: "KCM",
            size: "10cm",
            exclusive: "No",
            img: "bokukcm.jpg"
        },
        {
            name: "No brand girls",
            year: "2020",
            msize: "KCM",
            size: "12cm",
            exclusive: "No",
            img: "nbgkcm.jpg"
        },
        {
            name: "Bokura wa Ima no Naka de",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "bokurannn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "NNN",
            size: "15cm",
            exclusive: "No",
            img: "wnnn.jpg"
        },
        {
            name: "µ's x SNOW MIKU 2016",
            year: "2016",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "mikunnn.jpg"
        },
        {
            name: "Snow halation",
            year: "2019",
            msize: "NNN",
            size: "16cm",
            exclusive: "No",
            img: "shnnn.jpg"
        },
        {
            name: "ALL STARS",
            year: "2020",
            msize: "JNN",
            size: "30cm",
            exclusive: "No",
            img: "asjnn.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2015",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "wmjnn.jpg"
        },
        {
            name: "School Idol Festival",
            year: "2016",
            msize: "MJNN",
            size: "40cm",
            exclusive: "No",
            img: "sifmjnn.jpg"
        },
        {
            name: "SUNNY DAY SONG",
            year: "2015",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "sdsll.jpg"
        },
        {
            name: "A song for You! You? You!!",
            year: "2020",
            msize: "LL",
            size: "50cm",
            exclusive: "No",
            img: "yyyll.jpg"
        },
        {
            name: "Otonokizaka Winter Uniform",
            year: "2018",
            msize: "TJNN",
            size: "1m",
            exclusive: "No",
            img: "tera.jpg"
        }
    ]
};
const html = template(context);
const destination = document.querySelector(".neso");
destination.innerHTML = html; 