(function(){dust.register("search",body_0);function body_0(chk,ctx){return chk.write("<section class=\"search\"><div class=\"search-header clearfix\"><span class=\"glyphicon glyphicon-remove pull-right\"></span><h2>Search</h2></div><div class=\"input-group\"><input type=\"text\" class=\"form-control\" id=\"q\" placeholder=\"Enter Search Term\"><label for=\"q\" class=\"sr-only\">Search Term</label><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\"><span class=\"sr-only\">Search</span><span class=\"glyphicon glyphicon-search\"></span></button></span></div><div class=\"search-results padding-10\">").section(ctx.getPath(false, ["data","searchResults"]),ctx,{"block":body_1},null).write("</div></section>");}function body_1(chk,ctx){return chk.write("<ul class=\"list-unstyled\"><li><a href=\"/locations/").reference(ctx.get(["_id"], false),ctx,"h").write("\">").reference(ctx.get(["name"], false),ctx,"h").write("</a></li></ul>");}return body_0;})();