
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    let wether = '世界の天気(検索結果1件)\n以下の地域の天候に関する情報を表示します。';
    console.log(wether);
    let a = {
      i: ["緯度：1163972","経度：139.9075","天気：曇りがち","気温：9.94℃","体感温度：8.65℃","最低気温：9.94℃","最高気温：9.94℃","気圧：1022hPa","湿度：14%","風速：2.65m/s","風向き：197°","風の突風：4.84m/s","雲の量：53%","都市名：北京市"]
    }
    for (const x of a.i) {
        console.log(x);
    }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

    let div = document.querySelector("#result");
    div.innerHTML = "";

    let h2 = document.createElement("h2");
    h2.textContent = "以下の地域の天候に関する情報を表示します";
    div.insertAdjacentElement("beforeend", h2);

    let ul = document.createElement("ul");

    let list = [
        "緯度：" + data.coord.lon,
        "経度：" + data.coord.lat,
        "天気：" + data.weather[0].description,
        "気温：" + data.main.temp + "℃",
        "体感温度：" + data.main.feels_like + "℃",
        "最低気温：" + data.main.temp_min + "℃",
        "最高気温：" + data.main.temp_max + "℃",
        "気圧：" + data.main.pressure + "hPa",
        "湿度：" + data.main.humidity + "%",
        "風速：" + data.wind.speed + "m/s",
        "風向き：" + data.wind.deg + "°",
        "風の突風：" + data.wind.gust + "m/s",
        "雲の量：" + data.clouds.all + "%",
        "都市名：" + data.name
    ];

    for (let x of list) {
        let li = document.createElement("li");
        li.textContent = x;
        ul.insertAdjacentElement("beforeend", li);
    }

    div.insertAdjacentElement("beforeend", ul);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

