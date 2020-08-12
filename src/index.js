let _access;

export async function connect() {
  _access = await navigator.requestMIDIAccess({
    filters: [],
  });
}

export {
  _access as access,
};

