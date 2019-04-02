// resolveJsonConfig
import Vue from 'vue'
import Vuex from 'vuex'
import * as AboutConfig from "./config/about.json"
import * as SocialConfig from "./config/social_media.json"
import * as CtxMaintenanced from "./config/content.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Start fill the information here
    // About project
    about: {
      name: AboutConfig["project_name"],
      project_year_start: AboutConfig["project_year_start"]
    },
    // The Social Media
    social_media: {
      discord: {
        frame: SocialConfig["discord"]["frame"],
        invite: SocialConfig["discord"]["invite"]
      },
      facebook: SocialConfig["facebook"],
      twitter: SocialConfig["twitter"],
      instagram: SocialConfig["instagram"],
      youtube: SocialConfig["youtube"],
    },
    ctx: {
      main_text: CtxMaintenanced["main_text"],
      sub_text: CtxMaintenanced["sub_text"]
    }
  }
})
