function ListProds (content,id=null) {
//        var cate_no ="";
//        var cate = "";
        $(content).empty().append("<h2 style='color: blue'>รายการครุภัณฑ์</h2>"+
                                    "<ol class='breadcrumb'><li><a href='index.html'><i class='หน้าหลัก'></i> หน้าหลัก</a></li>"+
                                    "<li class='active'><i class='fa fa-wrench'></i> รายการครุภัณฑ์</li></ol>"+
                                    //"<div id='menu-mate_type'><a href='#' id='comp'>คอมพิวเตอร์</a> <a href='#' id='office'>สำนักงาน</a> <a href='#' id='total'>ทั้งหมด</a></div><br>"+
                                    "<div id='menu-mate_type'><a href='#' id='total'>ทั้งหมด</a></div><br>"+
                                    "<div class='row'><div class='col-md-12'><div class='box box-primary box-solid'>"+
                                    "<div class='box-header with-border'><h4 class='box-title'><i class='fa fa-star'></i> รายการครุภัณฑ์ </h4>"+
                                    "<div class='box-tools pull-right'><button type='button' class='btn btn-box-tool' data-widget='collapse'><i class='fa fa-minus'></i></button>"+
                                    "</div></div>"+
                                    "<div class='box-body'><div id='contentTB' class='table-responsive'></div>"+
                                    "</div></div></div></div>");
                            $("h2").prepend("<img src='images/icon_set2/dolly.ico' width='40'> ");
                            $.getJSON('JsonData/group_Data.php', function (GD) {
                                for (var key in GD) {
                                        $("#menu-mate_type").append($("<a href='#' id='PD"+key+"'>"+GD[key].group_name+"</a>&nbsp;"));
                                        $("a#PD"+key).addClass("btn btn-success").attr("onclick","ListProds('"+content+"',"+GD[key].group_id+")");
                                        
                                }           
                            });
                        //     $("a#comp").addClass("btn btn-success").attr("onclick","ListProds('"+content+"','10')");
                        //     $("a#office").addClass("btn btn-success").attr("onclick","ListProds('"+content+"','2')");
                             $("a#total").addClass("btn btn-success").attr("onclick","ListProds('"+content+"','0')");
            var idProds = id;
                    var column1 = ["id","เลขครุภัณฑ์","ชื่อ","งาน","ติดตั้งเมื่อ","วันที่ย้าย","หมายเหตุ","ซ่อม","สถานะ","รายละเอียด","ประวัติการซ่อม","แก้ไข","ลบ"];
                    var CTb = new createTableAjax();
                if(idProds == '0'){
                    CTb.GetNewTableAjax('contentTB','JsonData/DT_LP.php','JsonData/tempSendData.php',column1
                    ,'AddProds','pd_product','pd_id','content/list_prods.html',true,true,'HisRepair',true,'photoPDModal',false,null,'ส่งคืน',null,null,'ปรกติ','dbtb');
            }
            else{ 
                    CTb.GetNewTableAjax('contentTB','JsonData/DT_LP.php?'+idProds,'JsonData/tempSendData.php',column1
                    ,'AddProds','pd_product','pd_id','content/list_prods.html',true,true,'HisRepair',true,'photoPDModal',false,null,'ส่งคืน',null,null,'ปรกติ','dbtb');
        }
            
        }
