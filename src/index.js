let _device;

export async function connect() {
  _device = await navigator.usb.requestDevice({
    filters: [],
  });
}

export {
  _device as device,
};

