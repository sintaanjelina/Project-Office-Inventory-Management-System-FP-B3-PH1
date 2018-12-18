<script>
	
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
</script>