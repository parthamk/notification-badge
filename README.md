# notification-badge 

Simple notification badge react component this is an forked version of react-notification-badge and I have updated the dependency

[![Gyazo](http://i.gyazo.com/70028f7eb324a89fb130401774e8a159.gif)](http://gyazo.com/70028f7eb324a89fb130401774e8a159)

## Demo

[View Demo](http://mobilusoss.github.io/react-notification-badge/example/)

## Installation

```bash
npm install --save @parthamk/notification-badge
```

## API

### `NotificationBadge`

#### Props

```javascript
NotificationBadge.propTypes = {
  count: React.PropTypes.number,
  label: React.PropTypes.string,
  containerStyle: React.PropTypes.object,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  effect: React.PropTypes.array,
  duration: React.PropTypes.number,
};
```

- `count`: Badge count, if `count < 1`, badge will not shown.

- `label`: Badge label will be rendered instead of count.

- `containerStyle`: custom style of container

- `style`: custom style of badge

- `className`: className of badge

- `effect`: effect of notification.
  effect array should be `[string, string, object, object]`.

  `effect[0]` will be applied to `transform` on first frame.
  `effect[1]` will be applied to `transform` on `frameLength`.
  `effect[2]` will be applied as `style[key] = value` on first frame.
  `effect[3]` will be applied to `style[key] = value` on `frameLength`.

  Pre defined effect is available as

  - `Effect.ROTATE_X`
  - `Effect.ROTATE_Y`
  - `Effect.SCALE`

- `frameLength`: Frame length for `effect[1]` and `effect[3]` (default 30.0, 60.0fps/30.0 = 0.5 second)

## Usage example

```javascript
import NotificationBadge from "@parthamk/notification-badge";
import { Effect } from "@parthamk/notification-badge";

<div style={container}>
  <NotificationBadge count={this.state.count} effect={Effect.SCALE} />
</div>;
```

See [example](https://github.com/mobilusoss/react-notification-badge/tree/develop/example)

```bash
npm install
npm run start:example
```

## Tests

```bash
npm test
```

## Update dependencies

Use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

## License

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
