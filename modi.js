function unknown() {
    var str = document.moji.sousin.value;
    var str_obj = new String(str);
    
    alert(str_obj.length+ str_obj + str_obj.charAt(2)); //テスト

    
    var canvas2 = document.getElementById('canvas2');
    var context2 = canvas2.getContext('2d');

    var srcs = [ //パスを配列に格納
        'A.bmp',//0
        'B.bmp',//1
        'D.bmp',//2
        'E.bmp',//3
        'F.bmp',//4
        'G.bmp',//5
        'H.bmp',//6
        'I.bmp',//7
        'K.bmp',//8
        'L.bmp',//9
        'M.bmp',//10
        'N.bmp',//11
        'O.bmp',//12
        'P.bmp',//13
        'Q.bmp',//14
        'R.bmp',//15
        'S.bmp',//16
        'T.bmp',//17
        'U.bmp',//18
        'V.bmp',//19
        'W.bmp',//20
        'X.bmp',//21
        'Y.bmp',//22
        'Z.bmp',//23
    ];
    var images = [];
    for(var a = 0 ; a < str_obj.length ; a++){ //入力した文字数だけ回す
    	images[a] = new Image(); 
    	switch(str_obj.charAt(a)){
    		case 'a' : images[a].src = srcs[0];   break;
    		case 'b' : images[a].src = srcs[1];   break;
    		case 'd' : images[a].src = srcs[2];   break;
    		case 'e' : images[a].src = srcs[3];   break;
    		case 'f' : images[a].src = srcs[4];   break;
    		case 'g' : images[a].src = srcs[5];   break;
    		case 'h' : images[a].src = srcs[6];   break;
    		case 'i' : images[a].src = srcs[7];   break;
    		case 'k' : images[a].src = srcs[8];   break;
    		case 'l' : images[a].src = srcs[9];   break;
    		case 'm' : images[a].src = srcs[10];   break;
    		case 'n' : images[a].src = srcs[11];   break;
    		case 'o' : images[a].src = srcs[12];   break;
    		case 'p' : images[a].src = srcs[13];   break;
    		case 'q' : images[a].src = srcs[14];   break;
    		case 'r' : images[a].src = srcs[15];   break;
    		case 's' : images[a].src = srcs[16];   break;
    		case 't' : images[a].src = srcs[17];   break;
    		case 'u' : images[a].src = srcs[18];   break;
    		case 'v' : images[a].src = srcs[19];   break;
    		case 'w' : images[a].src = srcs[20];   break;
    		case 'x' : images[a].src = srcs[21];   break;
    		case 'y' : images[a].src = srcs[22];   break;
    		case 'z' : images[a].src = srcs[23];   break;
    	}
    }
    


    var loadedCount = 1;
    for (var i in images) { //各画像を連結して１つの画像にする
        images[i].addEventListener('load', function() {
            if (loadedCount == images.length) { //よくわからん　これ無いと座標がすべて同じ値になる
                var x = 0;
                for (var j in images) {
                    context2.drawImage(images[j], x, 0, 80, 80); //カンバスに画像を描画
                    x += 80;
                }
            }
            loadedCount++;
        }, false);
    }
    canvas2.setAttribute("width", x);
};
