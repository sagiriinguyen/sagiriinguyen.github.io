<?php
$xml=simplexml_load_file("/sagiriinguyen.github.io/xml/chapter.xml") or die("XML Error: Cannot create object");
  foreach($xml->children() as $chapters) {
    if ($chapters['page']==$page) {
    $title = $chapters->title;
    $h1 = $chapters->h1;
    $h2 = $chapters->h2;
    $des = $chapters->description;
    $cont = $chapters->content;
    }
  }?>
