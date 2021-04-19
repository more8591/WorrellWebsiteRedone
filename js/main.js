/***
My Scripts
***/
$(document).ready(function() {

 //Page Snapping Widget
 swinch.init(null);

//Input Masking
var phoneMask = [{ 'mask': '(###) ###-####' }, { 'mask': '(###) ###-##############' }];
$('input[name="phone"]').inputmask({
  mask: phoneMask,
  greedy: false,
  definitions: { '#': { validator: '[0-9]', cardinality: 1 }} });

});
