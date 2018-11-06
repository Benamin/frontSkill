var menulist = {
    "menulist": [
        {
            "MID": "M001",
            "MName": "首页",
            "Url": "#",
            "menulist": ""
        },
        { "MID": "M002", "MName": "车辆买卖", "Url": "#", "menulist":
                [
                    { "MID": "M003", "MName": "新车", "Url": "#", "menulist":
                            [
                                { "MID": "M006", "MName": "奥迪", "Url": "#", "menulist": "" },
                                { "MID": "M007", "MName": "别克", "Url": "#", "menulist": "" }
                            ]
                    },
                    { "MID": "M004", "MName": "二手车", "Url": "#", "menulist": "" },
                    { "MID": "M005", "MName": "改装车", "Url": "#", "menulist": "" }
                ]
        },
        {
            "MID": "M006",
            "MName": "宠物",
            "Url": "#",
            "menulist": "" }
    ]
};
$(function () {
    var showList = $(" <ul></ul> ");
    showall(menulist.menulist, showList);
    $(".navBox").append(showList);
});

//menu_list为json数据
//parent为要组合成html的容器
function showall(menu_list, parent) {
    for (var menu in menu_list) {
        //如果有子节点，则遍历该子节点
        if (menu_list[menu].menulist.length > 0) {
            //创建一个子节点li
            var li = $("<li><h2 class='obtain'></h2><i></i></li>");
            //将li的文本设置好，并马上添加一个空白的ul子节点，并且将这个li添加到父亲节点中
            $(li).append(menu_list[menu].MName).append("<ul></ul>").appendTo(parent);
            //将空白的ul作为下一个递归遍历的父亲节点传入
            showall(menu_list[menu].menulist, $(li).children().eq(0));
        }
        //如果该节点没有子节点，则直接将该节点li以及文本创建好直接添加到父亲节点中
        else {
            $("<li><h2 class='obtain'></h2></li>").append(menu_list[menu].MName).appendTo(parent);
        }
    }
}
