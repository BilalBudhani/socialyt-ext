import { createPopper } from '@popperjs/core';
import axios from "axios";


const api = axios.create({
  baseURL: "https://socialyt.bilal.dev/api"
})

export const fetchGithubRepo = (pathname) => {
  return api.get(`https://api.github.com/repos${pathname}`);
}

export const fetchTwitterUser = (pathname) => {
  return api.get(`/twitter/user${pathname}`);
}

export const createPopup = (targetEl, popupEl) => {
  return createPopper(targetEl, popupEl, {
    placement: "top",
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ]
  });
}