<!DOCTYPE html>
<html>
   <?php include_once "comp/head.php";?>
   <body class="w3-light-grey" style="display:block;">
      <div class="" id="cuerpo" style=" display:none;">
         <!-- Top container -->
         <div class="w3-bar w3-top w3-large" style="z-index:4; background-color: #ffccd5; padding: 0px !important;">
            <!-- w3-hide-large -->
            <span class="w3-bar-item w3-button w3-hover-none w3-hover-text-light-grey" id="btn_muenu_usuario" onclick="w3_open();" style="display:none; ">
               <!--  <i class="fa fa-bars">
               </i> -->
               <button class="w3-btn w3-ripple w3-green w3-round-xxlarge">
                  Menú
               </button>
            </span>
            <span class="w3-bar-item w3-right" id="cierra_sesion" style="">
               <button class="w3-btn w3-ripple w3-red w3-round-xxlarge">
                  Salir
               </button>
            </span>
            <span class="w3-bar-item w3-right" id="btn_inicia_sesion" style="display:none;">
               <button class="w3-btn w3-ripple w3-red w3-round-xxlarge">
                  Inicio
               </button>
            </span>
         </div>
         <?php include_once 'comp/nav.php';?>
         <div class="w3-main" id="main" style="margin-left:300px;margin-top:43px;">
            <div class="w3-container cuerpo">
               <?php include_once 'comp/comp.php';?>
            </div>
         </div>
      </div>
      <!--    <script src="js/js.js" type="text/javascript">
      </script> -->
      <?php include_once "comp/javascripr_exe.php";?>
   </body>
</html>
