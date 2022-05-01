# SllimNotify
Simple notification system for fivem. Preview: https://streamable.com/5zspdq
https://ibb.co/4T4nDqD

# Client side

```lua

exports['SllimNotify']:showNotify("Title", "Message", Time, 'type')

```

# Server side

```lua

TriggerClientEvent('SllimNotify:showNotify', source, "Title", "Message", Time, 'type')

```

# Types:

```lua

--success
--error
--info
--warning
--normal
--police
--ambulance

```

# Examples

```lua

exports['SllimNotify']:showNotify("INFO", "This is a info notification", 5000, 'info')

exports['SllimNotify']:showNotify("ERROR", "This is a error notification", 5000, 'error')

```
