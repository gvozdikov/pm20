/**
 * Created by gvozdikov on 22.07.2015.
 */
Template.registerHelper('formatDateTime', function(date) {
    return moment(date).format('YYYY-MM-DD HH:mm');
});
