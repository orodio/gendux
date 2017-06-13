# `@orodio/gate`

[![Build Status](https://travis-ci.org/orodio/gate.svg?branch=master)](https://travis-ci.org/orodio/gate)

### Install

```
yarn add @orodio/gate
```

### Use

```
import gate from "@orodio/gate"

const { isUnlocked, isLocked, lock, unlock } = gate() // same as gate(true)
isLocked()   // true
isUnlocked() // false
unlock()
isLocked()   // false
isUnlocked() // true
lock()
isLocked()   // true
isUnlocked() // false
```

### Dev

```
$ make               # see make help
$ make help          # shows all the make commands
$ make build         # build stuff puts it in /lib
$ make build-watch   # make build but all the time
$ make test          # tests the stuff
$ make test-watch    # make test but all the time
$ make version       # creates a patch tag
$ make version-minor # creates a minor tag
$ make version-major # creates a major tag
$ make publish       # publishes the module
```
