# SllimNotify
Simple notification system for fivem.

# Client side

exports['SllimNotify']:showNotify("Title", "Message", Time, 'type')

# Server side

TriggerClientEvent('SllimNotify:showNotify', source, "Title", "Message", Time, 'type')


# Types:
-success
-error
-info
-warning
-normal
-police
-ambulance

# Examples

exports['SllimNotify']:showNotify("INFO", "This is a info notification", 5000, 'info')

exports['SllimNotify']:showNotify("ERROR", "This is a error notification", 5000, 'error') 