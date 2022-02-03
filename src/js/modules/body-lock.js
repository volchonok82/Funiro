export const lockPadding = document.querySelectorAll('.lockfix');
export const lockPaddingValue = window.innerWidth - document.querySelector('._body-wrapper').offsetWidth + 'px';
export let unlock = true;
export let timeout = 10;


export function bodyLock() {
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  document.body.style.paddingRight = lockPaddingValue;
  document.body.classList.add('_lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

export function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    document.body.style.paddingRight = '0px';
    document.body.classList.remove('_lock');
  }, 0);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}