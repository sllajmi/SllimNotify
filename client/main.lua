RegisterNetEvent('SllimNotify:showNotify')
AddEventHandler('SllimNotify:showNotify', function(title, message, time, type)
	showNotify(title, message, time, type)
end)

function showNotify(title, message, time, type)
	SendNUIMessage({
		action = 'open',
		title = title,
		type = type,
		message = message,
		time = time,
	})
end


-- EXAMPLE NOTIFICATIONS you can remove this --

RegisterCommand('info', function()
    exports['SllimNotify']:showNotify("INFO", "This is a info notification", 7000, 'info')
end)


RegisterCommand('success', function()
    exports['SllimNotify']:showNotify("SUCCESS", "This is a success notification", 7000, 'success')    
end)


RegisterCommand('warning', function()
    exports['SllimNotify']:showNotify("WARNING", "This is a warn notification", 7000, 'warning')    
end)


RegisterCommand('error', function()
    exports['SllimNotify']:showNotify("ERROR", "This is a error notification", 7000, 'error')    
end)


RegisterCommand('normal', function()
    exports['SllimNotify']:showNotify("MESSAGE", "This is a normal notification", 7000, 'normal')    
end)


RegisterCommand('policenotify', function()
    exports['SllimNotify']:showNotify("POLICE", "This is a police notification", 7000, 'police')    
end)


RegisterCommand('ambulancenotify', function()
    exports['SllimNotify']:showNotify("AMBULANCE", "This is a ambulance notification", 7000, 'ambulance')    
end)
