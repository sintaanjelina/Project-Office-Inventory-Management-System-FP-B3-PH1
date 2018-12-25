	
	$( '#sidebar .navbar-nav a' ).on( 'click', function () {
		$( '#sidebar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );
	});

	$(function(){
    //ambil value action dari .handover-action
	    $(".handover-action li").click(function(){
	        var value = $(this).attr("value");
	        //dropdown nilainya dimasukkan ke input hidden yang akan di proses
	        $("input[name='handed_process_act']").val(value);
	    });
	});	

	$(document).ready(function(){
	    $('#tbl_item').DataTable();
	    $('#tbl_employee').DataTable();
	    $('#tbl_requestact_history').DataTable();
	    $('#tbl_approval_history').DataTable();	    
	    $('#tbl_returned_item').DataTable();
	    $('#tbl_onprocess_request').DataTable();
	    $('#tbl_approval_req_list').DataTable();
	    $('#tbl_my_request').DataTable();
	    
	} );

