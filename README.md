# Inkdrop Calculator

This simple plugin relies on MathJS to perform a basic evaluate() on anything between two carets.

## Usage

`^<math here>^`

Example:

| Markdown        | Output                 |
| --------------- | ---------------------- |
| `^1+1^`         | 2                      |
| `^sqrt(9)^`     | 3                      |
| `^hello world^` | Undefined symbol hello |
| `^sin(1)^`      | 0.8414709848078965     |

## To-do

* [x] Publish initial plugin
* [ ] Set up unit tests
* [ ] Set up CI/CD using above unit tests
* [ ] ???
* [ ] Profit

## Credits

1. Takuya Matsuyama, developer of [Inkdrop](https://inkdrop.app)
2. Takuya Matsuyama, author of Inkdrop's [Math](https://github.com/inkdropapp/inkdrop-math) plugin
3. [Rory Olsen](https://github.com/rolsen), who helped me get this off the ground and working in spite of my lack of Javascript experience.
