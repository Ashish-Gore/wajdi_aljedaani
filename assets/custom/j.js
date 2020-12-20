function copyToClipboard(str, decode){
    const el = document.createElement('textarea');
    if(decode) el.value = atob(str);
    else el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

$(document).ready(function() {
    // set up the bibtex modals for copying citations
    $('#modalBibtex').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var bibtex = button.data('bibtex') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      // modal.find('.modal-title').text('New message to ' + recipient)
      // modal.find('.modal-body input').val(recipient)
      modal.find("#bibtex-content").text(bibtex);
      modal.find(".modal-footer button").click(copyToClipboard(bibtex,false));
    });            
    $('[data-toggle="tooltip"]').tooltip();
    
    // hash to a paper publication
    if(window.location.hash.length > 0) {    
      var hash = window.location.hash;
      $(hash + " .publication-title").addClass("highlight");
      window.scrollTo(0, $(hash).offset().top - 80);
      setTimeout(function() {
        $(hash + " .publication-title").removeClass("highlight");
      }, 1500);    
    }
});


// $(window).on('hashchange', function(){
//     var hash = window.location.hash;
//     $(hash + " .publication-title").addClass("highlight");
// });