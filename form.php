<?php
$width  = 192;
$height = 108;
$kanbasu = imagecreatetruecolor($width,$height); //カンバスの作成。resource
  //$unknown =  imagecreatefromjpeg ( "A.jpg" );
  $unknown =  "A.jpg";
  

  $stl = strlen($_POST['message']);         //文字列の長さ　（つかってない）

  echo "あなたがかいたのは";
  echo htmlspecialchars($_POST['message']); //制約無しでそのまま表示
  echo "だよ";

 // switch ($_POST['message']) {
 //   case 'あ':
 //     echo "いうえお";
 //     break;
 //   case 'い':
  //    echo "うえお。";
 //     break;
 //   default:
 //   echo ".....";
 //   break;
 // }
  
header('Content-Type: image/jpeg');
  echo $unknown;
  imagecopy($kanbasu, $unknown, 0, 0, 0, 0, 200, 200);
  image2wbmp($kanbasu);
  //echo $unknown;
  //imagejpeg( $kanbasu, 'unknown.jpg');
?>