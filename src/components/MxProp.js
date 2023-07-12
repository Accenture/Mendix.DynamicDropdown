/* eslint-disable */
const MxProp = {
  canGet: prop => prop && prop.status === "available",
  canSet: prop => prop && prop.status === "available" && !prop.readOnly,
  canExe: prop => prop && prop.canExecute,
  tryGet: (prop, def) => (MxProp.canGet(prop) ? prop.value : def),
  trySet: (prop, val) => { if (MxProp.canSet(prop)) prop.setValue(val); },
  tryExe: prop => { if (MxProp.canExe(prop)) prop.execute(); }
}

export default MxProp;
