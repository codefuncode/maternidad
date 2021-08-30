<!DOCTYPE html>
<html>
   <?php include_once "comp/head.php";?>
   <body class="w3-light-grey" style="display:block;">
      <div class="" id="cuerpo" style=" display:none;">
         <!-- Top container -->
         <div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
            <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();">
               <i class="fa fa-bars">
               </i>
               Menu
            </button>
            <span class="w3-bar-item w3-right">
               Inicio
            </span>
         </div>
         <?php include_once 'comp/nav.php';?>
         <div class="w3-main" id="main" style="margin-left:300px;margin-top:43px;">
            <div class="w3-container cuerpo">
               <?php include_once 'comp/comp.php';?>
            </div>
         </div>
      </div>
      <script src="js/js.js" type="text/javascript">
      </script>
   </body>
</html>
