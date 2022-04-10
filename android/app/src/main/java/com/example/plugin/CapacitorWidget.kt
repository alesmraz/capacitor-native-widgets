package com.example.plugin

import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent


class CapacitorWidget internal constructor(context: Context) {
    private val appContext: Context = context

    fun setItem(key: String?, value: String?, group: String?): Boolean {
        val editor = appContext.getSharedPreferences(group, 0).edit()

        editor.putString(key, value)
        editor.apply()

        return true
    }

    fun getItem(key: String?, group: String?): String? {
        return appContext.getSharedPreferences(group, 0).getString(key, null)
    }


    fun removeItem(key: String?, group: String?): Boolean {
        val editor = appContext.getSharedPreferences(group, 0).edit()

        editor.remove(key)
        editor.apply()

        return true
    }

    fun reloadWidget(): Boolean {

        val intent = Intent(appContext, ExampleWidget::class.java)
        intent.action = AppWidgetManager.ACTION_APPWIDGET_UPDATE

        val ids: IntArray =
            AppWidgetManager.getInstance(appContext)
                .getAppWidgetIds(ComponentName(appContext, ExampleWidget::class.java))
        intent.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids)

        appContext.sendBroadcast(intent)

        return true
    }
}
