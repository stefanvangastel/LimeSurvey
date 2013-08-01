<div id="<?php echo $id; ?>" class="settings">
        <ul>
        <?php
            foreach ($settings as $name => $setting)
            {
               $setting['language'] = $language;
               // widget renders all elements in a single form
               echo CHtml::tag('div', array('class' => 'control-group'), $PluginSettings->renderSetting($name, $setting, $form, true));
            }
        ?>
        </ul>
</div>