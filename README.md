# DynamicDropdown
Simple HTML Select element configured by JSON.

## Configuration
- `Options JSON` - data that will be displayed. Has to be a JSON array containing either primitives (strings/integers) or objects in the format
   ```json
   {
       "id":1,
       "label": "label1:"
   }
   ```
   Primitives approach is helpful when label and id are the same for each element. Example with string primitives:
   ```json
   [
       "element1",
       "element2",
       "element3"
   ]
   ```
   Example with objects:
   ```json
   [
       {
           "id":1,
           "label": "label1:"
       },
       {
           "id":2,
           "label": "label2:"
       }
   ]
   ```
- `Selected option id` - used as both input (default, initial value) and output (value chosen by the user will be set here)
- `Selected option label` - (optional) label chosen by the user will be set here (output only - you cannot use it to set the initial value)
- `On selected option change` - (optional) action to happen on selection change
