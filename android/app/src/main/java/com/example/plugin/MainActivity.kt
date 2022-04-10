package com.example.plugin

import android.os.Bundle
import com.getcapacitor.BridgeActivity


class MainActivity : BridgeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)


        registerPlugin(CapacitorWidgetPlugin::class.java)
    }
}