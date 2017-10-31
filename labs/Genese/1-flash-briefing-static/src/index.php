<?php
$json = json_decode(file_get_contents('https://<<API GATEWAY LINK>>/prod/TaeglichZitat/?quoteid='.$_GET['quote']), true);
//print_r($json);

if ($json['mainText']=="") {
	
	
}
// echo date('d');
 

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Dein tägliches Zitat</title>
    <style>
      body {
        background: #fff;
        color: #000;
        font-family: Georgia;
      }
    
      p {
        line-height: 20px;
        
      }

      #wrapper {
        width: 550px;
        margin: 0 auto;
      }

      blockquote {
        margin: 0;  font-size: 500px;
      }

      .quote {
        margin-top: 100px;
       
      }

   h1 {font-size: 17px;  font-family: Verdana}
	cite {font-size: 40px; line-height: 70px;}
    .about {font-size:10px;}

      .about a {
        color: #666;
      }

      blockquote {
        line-height: 40px;
        font-size: 26px;
        color: #444;
      }


    </style>
  </head>

  <body>

    <div id="wrapper">
      <div class="quote">
        <h1>Dein tägliches Zitat</h1>
        <cite id="cite"><?php echo str_replace("<break time='200ms'/>"," - ",$json['mainText']); ?></cite>
          <p class="about">Alexa Skill made by <a href="https://vidanov.com">vidanov.com</a>.
      </div>

    
          <span class="ad"></span>
      </p>
    </div>

  
  </body>
</html>

