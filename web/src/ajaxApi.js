import $ from "jquery";
const API_ROOT = "http://localhost:3000/api/";

const responseBody = res => res.body;

const apiGetBattleHeadlines =  () => {
  // const response = await fetch("api/instanceBattleHeadLines");
  // const body = await response.json();

  // if (response.status !== 200) throw Error(body.message);

  // return body;

  return $.ajax({
    url:  API_ROOT + "instanceBattleHeadLines",
    dataType: "json",
    cache: false,
    success: function(data) {
      
    },
    error: function(xhr, status, err) {
      console.error(
        API_ROOT + "instanceBattleHeadLines",
        status,
        err.toString()
      );
    }
  });
};

const apiGetBattle =  (battle_key) => {

  return $.ajax({
    url: API_ROOT + "instanceBattle/" + battle_key,
    dataType: "json",
    cache: false,
    success: function(data) {
    },
    error: function(xhr, status, err) {
      console.error(
        API_ROOT + "instanceBattle/" + battle_key,
        status,
        err.toString()
      );
    }
  });
};

export default {
  apiGetBattleHeadlines,
  apiGetBattle
};
