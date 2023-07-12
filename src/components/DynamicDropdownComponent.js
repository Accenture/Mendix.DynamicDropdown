/* eslint-disable */
import { createElement } from "react";
import MxProp from './MxProp';

function DynamicDropdownComponent(props) {

  // props
  if (!props) return;

  // options
  let opts = [];
  try { opts = JSON.parse(MxProp.tryGet(props.IN_OPTS, "[]")) } catch {}
  opts = opts.map(o => (o && o instanceof Object)
      ? o
      : {id: o, label: o}
    );

  // placeholder
  const placeholder = props.placeholderMessage ? props.placeholderMessage.value : '';

  // selection
  const selectedId = MxProp.tryGet(props.INOUT_SELECTED_ID, "");
  function onChange(selectedId) {
    const opt = opts.find(o => o.id == selectedId);
    MxProp.trySet(props.INOUT_SELECTED_ID, selectedId);
    MxProp.trySet(props.OUT_SELECTED_LABEL, opt ? opt.label : null);
    MxProp.tryExe(props.ON_SELECTION_CHANGE);
  }

  // add placeholder if present
  function embedPlaceholderIfEmptySel(){
    if (placeholder != ''){
        return <option value='' key='' disabled hidden>{placeholder}</option>
    }
    else{
        return null
    }
  }

  function prepareClassList(){
    if (selectedId != ''){
      return "mx-dropdown form-group no-columns"
    }
    else{
      return "mx-dropdown form-group no-columns dynamic-dropdown-placeholder"
    }
  }

  return (
    <div class={prepareClassList()}>
      <select value={selectedId} disabled={props.INOUT_SELECTED_ID.readOnly} class="form-control" onChange={(event) => {onChange(event.target.value);}}>
        {embedPlaceholderIfEmptySel()}       
        {opts.map((opt) => (<option value={opt.id} key={opt.id}>{opt.label}</option>))}
      </select>
    </div>
  );
}

export default DynamicDropdownComponent;
