<div id="<?php echo $id; ?>" class="settings">
        <ul>
        <?php
            $widget = $this->beginWidget('ext.SettingsWidget.SettingsWidget');
            foreach ($settings as $name => $setting)
            {
               $setting['language'] = $language;
               echo CHtml::tag('div', array('class' => 'control-group'), $widget->renderSetting($name, $setting, $form, true));
            }
            $this->endWidget();
        ?>
        </ul>
</div>