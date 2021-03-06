$(document).ready(function(){
    $(".surveysecurity").tablesorter({
        widgets: ['zebra'],
	    sortList: [[2,0]],
 	    headers: { 19: { sorter: false} }
    });


    $(".usersurveypermissions").tablesorter({
         widgets: ['zebra'],
         headers: { 0: { sorter: false},
                    2: { sorter: false},
                    3: { sorter: false},
                    4: { sorter: false},
                    5: { sorter: false},
                    6: { sorter: false},
                    7: { sorter: false},
                    8: { sorter: false}
                  }
    });

    $('.mixed').fadeTo(1, .4);

    $(".markrow").click(
        function(){
            $(this).fadeTo(1, 1);
            $(this).closest('tr').find('input').prop('checked',$(this).prop('checked'));
        }
    )

    $('.extended input').click(
     function(){
            $(this).closest('tr').find('.markrow').fadeTo(1, 1);
            if ($(this).closest('tr').find('.extended input:checked').size()==$(this).closest('tr').find('.extended input').size())
            {
                $(this).closest('tr').find('.markrow').prop('checked',true);
            }
            else if ($(this).closest('tr').find('.extended input:checked').size()==0)
            {
                $(this).closest('tr').find('.markrow').prop('checked',false);
            }
            else
            {
                $(this).closest('tr').find('.markrow').prop('checked',true);
                $(this).closest('tr').find('.markrow').fadeTo(1, .4); //greyed
            }
     }
    )

    if ($.cookie('surveysecurityas')!='true')
    {
        $('.usersurveypermissions .extended').hide();
    }

    $('.usersurveypermissions tr').each(function(){
            $(this).find('.markrow').fadeTo(1, 1);
            if ($(this).find('.extended input:checked').size()==$(this).closest('tr').find('.extended input').size())
            {
                $(this).find('.markrow').prop('checked',true);
            }
            else if ($(this).find('.extended input:checked').size()==0)
            {
                $(this).find('.markrow').prop('checked',false);
            }
            else
            {
                $(this).find('.markrow').prop('checked',true);
                $(this).find('.markrow').fadeTo(1, .4); //greyed
            }
    })

    $('#btnToggleAdvanced').click(function(){
        extendoptionsvisible=$('.usersurveypermissions .extended').is(':visible');
        if (extendoptionsvisible==false)
        {
            $('.usersurveypermissions .extended').fadeIn('slow');
        }
        else
        {
            $('.usersurveypermissions .extended').fadeOut();
        }
        updateExtendedButton(!extendoptionsvisible);
        $.cookie('surveysecurityas',!extendoptionsvisible);
    })
    updateExtendedButton(true);
});

function updateExtendedButton(bVisible)
{
    if (bVisible==true)
    {
        $('#btnToggleAdvanced').val('<<');
    }
    else
    {
        $('#btnToggleAdvanced').val('>>');
    }

}
