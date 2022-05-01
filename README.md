# SllimNotify
Simple notification system for fivem.

# Client side

exports['SllimNotify']:showNotify("Title", "Message", Time, 'type')

# Server side

TriggerClientEvent('SllimNotify:showNotify', source, "Title", "Message", Time, 'type')


Types:
-success
-error
-info
-warning
-normal
-police
-ambulance