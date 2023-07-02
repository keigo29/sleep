'use strict';
{
    const kad = document.getElementById('kadl');
    const ing = document.getElementById('ing');
    const btn = document.getElementById('btn');
    let num = 0;
    let mun = 0;

    const matels =[
        'タブレット','貨物列車','背番号17番',
        'カラス','家','故郷',
        '１位','太陽','ネズミ',
        'お茶','ルービックキューブ','たらい',
        'iphoneケース','原子','ギター',
        'リモコン','カメラロール','付箋',
        '引き出し','カーテン','雲',
        '車','ダンボール','猫',
        'ピアス','ゴミ箱','ハサミ',
        '本','じゃがいも','バスケットコート'
    ];
    const messages = [
        '具体的に思い浮かべてください','その調子です','脳が眠くておかしくなっていると自覚し始めます',
        'zzz',
    ];
      function henshin(tex) {
    //    文字を実行されるたびに入れ替える
       tex.textContent = matels[num];
       num++;
       if(num===matels.length){
           num = 0; 
       }
      }
      function geta () {
    //    文字を実行されるたびに入れ替える
       ing.textContent = messages[mun];
       mun++;
       if(mun===messages.length){
           mun = 0; 
       }
      }

    btn.addEventListener('click', ()=>{
        // ボタンに消すクラスを追加
        btn.classList.add('inn');
        // kadの消すクラスを消去
        kad.classList.remove('inbv');
        // kadのテキストをmatelsの要素達に
        // テキストコンテントを三秒ごとに入れ替える
        setInterval(function(){henshin(kad)},3000);
        // 6秒ごとにingメッセージを変化させる
        setInterval(function(){geta},6000);
    });
}