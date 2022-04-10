package com.example.plugin

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "CapacitorWidget")
class CapacitorWidgetPlugin : Plugin() {

    private lateinit var implementation: CapacitorWidget

    override fun load() {
        implementation = CapacitorWidget(context)
    }

    @PluginMethod
    fun setItem(call: PluginCall) {
        val key = call.getString("key")
        if (key == null) {
            call.reject("Must provide key");
            return;
        }

        val value = call.getString("value")

        if (value == null) {
            call.reject("Must provide value");
            return;
        }

        val group = call.getString("group")

        if (group == null) {
            call.reject("Must provide group");
            return;
        }

        val ret = JSObject()
        ret.put("results", implementation.setItem(key, value, group))
        call.resolve(ret)
    }

    @PluginMethod
    fun getItem(call: PluginCall) {
        val key = call.getString("key")
        if (key == null) {
            call.reject("Must provide key");
            return;
        }

        val group = call.getString("group")

        if (group == null) {
            call.reject("Must provide group");
            return;
        }

        val ret = JSObject()
        ret.put("results", implementation.getItem(key, group))
        call.resolve(ret)
    }

    @PluginMethod
    fun removeItem(call: PluginCall) {
        val key = call.getString("key")
        if (key == null) {
            call.reject("Must provide key");
            return;
        }

        val group = call.getString("group")

        if (group == null) {
            call.reject("Must provide group");
            return;
        }

        val ret = JSObject()
        ret.put("results", implementation.removeItem(key, group))
        call.resolve(ret)
    }

    @PluginMethod
    fun reloadWidget(call: PluginCall) {
        val widgetAppId = call.getString("widgetAppId")

        val ret = JSObject()
        ret.put("results", implementation.reloadWidget())
        call.resolve()
    }

}